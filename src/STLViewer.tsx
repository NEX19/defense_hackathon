import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import type { Group, Mesh } from "three";
import { Box3, Vector3 } from "three";

// --- Helper: loader overlay ---
function LoaderOverlay() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="bg-white/90 dark:bg-slate-900/80 text-sm rounded-md px-4 py-2 shadow">Loading {Math.round(progress)}%</div>
    </Html>
  );
}

// --- The 3D model wrapper ---
function GliderModel({ wireframe }: { wireframe: boolean }) {
  const group = useRef<Group | null>(null);
  const obj = useLoader(OBJLoader, "/models/glider.obj"); // expects public/models/glider.obj

  // center & scale to fit
  useEffect(() => {
    if (!group.current || !obj) return;
    // remove previous children then add fresh (avoid duplicates)
    group.current.clear();
    group.current.add(obj.clone());

    const box = new Box3().setFromObject(obj as any);
    const size = new Vector3();
    box.getSize(size);
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    const desiredSize = 2; // scene unit
    const scale = desiredSize / maxAxis;

    group.current.scale.setScalar(scale);

    const center = new Vector3();
    box.getCenter(center);
    // move model so it's centered at origin
    group.current.position.set(-center.x * scale, -center.y * scale, -center.z * scale);

    // apply default material adjustments
    group.current.traverse((child: any) => {
      if ((child as Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [obj]);

  // wireframe toggle
  useEffect(() => {
    if (!group.current) return;
    group.current.traverse((child: any) => {
      if ((child as Mesh).isMesh && child.material) {
        try {
          child.material.wireframe = wireframe;
          // some OBJ materials might not respond well to changing side/opacity here
        } catch (e) {
          // ignore
        }
      }
    });
  }, [wireframe]);

  return <group ref={group} />;
}

// --- Keep camera nicely framed if the canvas size or model changes ---
function AutoFrame({ distance = 4 }: { distance?: number }) {
  const { camera, gl } = useThree();
  // set a sensible default camera position
  useEffect(() => {
    camera.position.set(distance, distance * 0.6, distance * 0.8);
    camera.near = 0.01;
    camera.far = 1000;
    camera.updateProjectionMatrix();
    // ensure controls know about size changes (drei's OrbitControls handles this)
    gl.setPixelRatio(Math.min(2, window.devicePixelRatio));
  }, [camera, gl, distance]);
  return null;
}

// --- Main exported component ---
export default function ObjViewerGlider({ className }: { className?: string }) {
  const [wireframe, setWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [bg, setBg] = useState("#e6eef8");

  return (
    <div className={`relative rounded-xl shadow-lg overflow-hidden ${className ?? "w-full h-96"}`}>
      {/* Controls overlay */}
      <div className="absolute right-3 top-3 z-20 flex flex-col gap-2">
        <button
          onClick={() => setAutoRotate((s) => !s)}
          className="px-3 py-1 rounded-md bg-white/90 text-xs shadow-sm"
        >
          {autoRotate ? "Auto-rotate: On" : "Auto-rotate: Off"}
        </button>

        <button
          onClick={() => setWireframe((s) => !s)}
          className="px-3 py-1 rounded-md bg-white/90 text-xs shadow-sm"
        >
          {wireframe ? "Wireframe: On" : "Wireframe: Off"}
        </button>

        <label className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/90 text-xs shadow-sm">
          <span className="text-[11px]">BG</span>
          <input
            aria-label="background color"
            value={bg}
            onChange={(e) => setBg(e.target.value)}
            className="w-16 h-6 p-0 m-0 border-none bg-transparent"
            type="color"
          />
        </label>
      </div>

      <Canvas
        shadows
        dpr={[1, 2]}
        style={{ background: bg }}
        camera={{ fov: 45 }}
        className="w-full h-full"
      >
        <Suspense fallback={<LoaderOverlay />}>
          <AutoFrame distance={4} />

          <ambientLight intensity={0.6} />
          <directionalLight
            position={[5, 10, 7]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <GliderModel wireframe={wireframe} />

          <OrbitControls
            enableDamping
            enablePan
            enableZoom
            autoRotate={autoRotate}
            autoRotateSpeed={0.6}
            maxPolarAngle={Math.PI * 0.95}
          />

          {/* subtle ground */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial transparent opacity={0.3} />
          </mesh>
        </Suspense>
      </Canvas>

      {/* small footer */}
      <div className="absolute left-3 bottom-3 z-20 text-xs text-slate-700/80 bg-white/80 rounded-md px-2 py-1">
        public/models/glider
      </div>
    </div>
  );
}
