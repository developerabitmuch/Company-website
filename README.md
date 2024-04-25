# 3D Portfolio using Threejs

- This is the threejs portfolio building using the threejs and react.

## Tailwindcss

- installomg tailwindcss.
- index.css mein github-gist se code paste krrhe hain
- uske ilawa tailwind-config mein bhi github-gist se copy krrhe hain code.

## Routing

- npm i react-router-dom
- By using this we can apply routing in our application
- 4-Routes created -- Home,About,Projects,Contact
- Navbar se link krne ke liye hm Navlink ka tag use kreinge jo ke hmein react-router-dom se milta hai -- by the help of this hm link krleinge within the application without reloading and it is the best one

### Home Page:

- Is page ko hm semantic element deinge all the way root pe jo hai section,nav take semantic site bne hmare pass.
- Iski width full kredeinge hm apne pass all the way.
- Is mein hmare pass aik popup hoga aur hmare pass ismein 3D images hngi jo ghoomeini all the way.
- main parent div hmne relative bnadia hai joke section hai aur baki ke popup aur 3D images wale div hmare pass absolute hnge all the way.

### Experience:

- {/_ Experience of A Bit Much_/}
    <div className="py-16">
      <h3 className="subhead-text">Our Clients.</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-800">
        <p>
          We've worked with different clients, leveraging🚀 their Business and
          Sky Rocketing🚀 there Sales. Here's the rundown:
        </p>
      </div>

      {/* Using React Vertical Timeline Component library to actually modify and create the timeline along with the animations */}
      {/* Work History show krne ke liye client ko hm Timeline ke component ko use krrhe hain */}
      <div className="mt-12 flex">
        <VerticalTimeline>
          {/* Experience ke array ko map krleinge aur experienceElement ke andar show krdeinge hm use */}
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
              className="hover-effect" // Applying custom hover class
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {experience.company_name}
                </p>
              </div>

              {/* Here we explain in the bullet points that what we actually do at that company  */}
              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

    </div>

## 3D Image Rendering -- npm i @react-three/fiber

- import {canvas} from "@react-three/fiber"
- canvas is the root element to start buildind 3D websites -- canvas ka tag root pe hoga hmare pass aur ise hm istamaal kreinge all the way -- yh aik parent element hoga baki sare elements hmare pass iske andar aeinge all the way.
- canvas mein attribute hai camera ka aur camera mein attribute hai near/far ka aur yh near aur far camera ke objects ki rendering ke liye hai.
- Suspense is a reactjs component used for the loading purpose.
- npm i @react-three/drei -- it is used to practice the -- yh helping library hai reac-three/fiber ki.
- import { Html } from '@react-three/drei' -- isko hmne is liye use kra hai take hmare pass issues nhi aein rendering krte we 3D models ki.
- 3D websites bnane mein sbse important chez jo hai wo hai hmare pass lights -- hmein inlights ki madad se khelna hoga -- bht sari trhn ki lights hian threejs mein jese ke -- directionalLight/ambientLight/pointLight/spotLight/hemisphereLight
- https://sketchfab.com/feed --- isse jake hm 3D models download krleinge apne pass all the way -- gltf mein use krleinge hm apne pass.
- phr web mein hmare pass gltf ki jo files hain wo jsx mein use krleinge hm bnake with the help of the site created by the threejs community. -- https://gltf.pmnd.rs/
- gltf ke 3D models ko hm yhn pe dalke use krleinge apne pass kionke yh website unhe jsx component bnadeti hai aur phr hm un models ko use krleinge apne pass all the way.
- models uthake website pe dal deinge hm aur phr hm un models ko apne pass use krleinge website mein dalke kionke model ka jsx bnadeta hi website.
- models ka folder create krna hai hmne.
- model ki files bhi assest pora folder uthake leaeinge hm apne src folder mein pori trhn se apne pass aur hmne asset ke andar ko 3d image use krni hai wo bhi hm use kreinge image apne pass model ki jsx mein.
- import {a} from "@react-spring/three" -- yh library bhi use krni hai hmne
- a.group krdeinge hm -- a ka mtlb hai animated hmare pass idhr
- ref create kreinge hm pore group ke uper apne pass yhn pe.
- Hmne island ki file ko full modify krlia hai apne pass aur model ko apne hisab se hmne modify krlia hai aur ab isko hm use krskte hain
- model bnake hmne suspense ke component mein import krlia hai use krne ke liye ab isko dekhte we lekin error dera hai vite hmein kionke hmne vite.config.js mein defin enhi kra hai assets apna -- assetsInclude:['**/*.glb']
- model hmara hmein show hogya hai screen pe lekin positioning sahi nhi hai hmare model ki aur hmein 3D model ki positioning change krni pregi take hmara modl showcase hojae jo hm import krrhe hain.
- Model load hogya hai lekin screen sizing ka issue hai to us issue ke liye hmn screen sizing ka aik function bnalia hai aur hm ab screen sizing ke attributes as a parameter hm deinge apne Island ke component mein suspense mein.
- Position krke jo hm derhe hain apne pass wo sbse important hai kaam usi ki waja se model hmare pass show krrha hai.
- Ab hmare pass hmara model show horha hai screen pe kionke hmne screen sizing sahi krdi hai apne model ki -- ab hmne krna yh hai ke apne model ko rotate krna hai hmne aur hmne lights pe khelna hai.
- 1- 3D model show krna phla masla hai.
- 2- Lights exevute krna model pe yh hmara dosra kaam hai.
- 3- Rotation execute krdena yh teesra kaam hai
- yh sarin chezein jin attributes ke zariye se chalti hain wo sekhke lagana asal baat hai

### Lighting:

- Lighting plays an important role in the 3D model.
- Directional Light is the light coming from the distance source just like sun ;
  <directionalLight position={[1, 1, 1]} intensity={2} />
- position -- yh attribute btata hai light khn pe marni hai.
- intensity -- yh attribute btata hai ke light kis intensity se mareinge
- Ambient Light mein shadows nhi hote yh light har jagah aik si hi jati hai
  <ambientLight intensity={0.5} />
- Point Light emits the light from one particular source.
- spotlight is similar to pointlight but it somehow provides an angle all the way.
- Hemisphere light mein hm color bhi btaskte hain
  <hemisphereLight
            skycolor="b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
- After adding lights to the scene, you can configure their properties such as color, intensity, position, and direction using props. Each type of light has specific props for controlling its behavior and appearance.
- hm yh sare props jo hain wo apply krkste hain light ke uper
- Positioning and Orienting Lights:
  Lights can be positioned and oriented in 3D space using their position, rotation, and lookAt props. This allows you to control the direction and intensity of light within the scene.

## 3D - Sky;

- Same kaam krna hai hmne models mein hmne sky ki file bnani hai aur phr mesh uthake leke aeinge hm .dlb ko change krke.
- mesh ke tag ke andar hona zrori hai isko root element mein wrna kaam nhi krega yh.
- const sky = useGLTF(skyScene); -- skyscene ki file jo dlb wali hai usko use krrhe hain.
- island ki file mkein bht sare meshes hain aur hm unbhtsare meshes ko move kreinge rotate kreinge aur phr hm unpe effects implement kreinge lekin yhn pe hmare pass sky mein aik hi mash hai
- Inside the <mesh>, we use the <primitive> component to render the 3D sky scene. The <primitive> component allows us to render any Three.js object or hierarchy.
- Mesh:

A mesh represents a single 3D object with geometry (shape) and material (appearance).
It is typically used to represent individual objects such as a cube, sphere, or custom model.
Meshes can have properties like position, rotation, and scale that affect their appearance and behavior.
Each mesh is rendered as a separate entity in the scene and can have its own material and texture applied to it.

- Group:

A group is a container object used to group multiple meshes or other objects together.
It does not have its own geometry or material but serves as a way to manage and manipulate multiple objects collectively.
Groups can be used to organize related objects, apply transformations to multiple objects simultaneously, or control the visibility of multiple objects at once.
They are particularly useful when you have a collection of objects that need to be moved, rotated, or scaled together.

- n React Three Fiber (R3F), the <primitive> component is used to render any Three.js object directly within a React component. It allows you to leverage the full power of Three.js and integrate custom or complex 3D objects seamlessly into your R3F application. Here are some scenarios where you might want to use the <primitive> component:
-       <primitive object={sky.scene} />  -- this is the primitive tag we used actually to render the sky that was imported using the useGLTF by drei.
- the reason why we used sky as a 3d.gbl image is that when we rotate the island image so we will going to see that we are in a sphere that is 3-dimentional instead we just rotate in 2D.

## Bird and Plane;

- we will going to use the plane and bird to move above this scenario and for that we will going to use them inside the model.
- we will be animating the bird and we will be calling the scene inside the object.
- <primitive object={scene} /> -- primitive mein object mein bird ko call krlia hai hmne yhn pe
- Mesh ke attributes ko use kreinge hm yhn pe jese ke position aur scale ke attribute ko hm use kreinge.
- <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
  <primitive object={scene} />
  </mesh>
- The position prop defines the position of the mesh in 3D space using an array of three numbers [x, y, z].
  In this case, the mesh is positioned at coordinates [-5, 2, 1], which means it's located 5 units to the left (negative x-axis), 2 units up (positive y-axis), and 1 unit forward (positive z-axis) from the origin (0, 0, 0).

- The scale prop defines the scale of the mesh along the x, y, and z axes using an array of three numbers [xScale, yScale, zScale].
  In this case, the mesh is scaled down by a factor of 0.003 along all axes, making it much smaller compared to its original size.
  Scaling a mesh affects its size but not its position or orientation.

- we have used the mesh to While HTML <div> elements are suitable for building 2D user interfaces on the web, they lack the necessary features and capabilities to represent 3D geometry and render complex 3D scenes efficiently. Additionally, HTML and CSS are not designed for real-time 3D rendering and lack the advanced features required for 3D graphics applications. Therefore, in the context of 3D graphics programming, meshes are the standard representation for defining and rendering 3D objects within a scene.
- Plane ke liye bhi aik function bnaleinge hm to adjust it according to the requirement of the screen sizes take adjust hojae.

- const Planee = ({ isRotating, ...props }) => --

hmne home mein component call kraya hai yh plane ka aur props pass kre hain whn pe hmne ismein planeScale, planePosition, isRotating, Rotation jo ke fixed rkhdi hai hmne.
Ab plane ke component ke andar hm in props ko destructure krleinge apne pass lekin yhn hm destructre aise krrhe hain isRotating khali call krrhe hain apne passs aur uske ilawa hm ...props - spread operater ke sath hm props call krrhe hain yhn pe.
mesh mein hm sedhe sedhe {...props} derhe hain
Isse hmara plane ke direction change hogae hai hmare pass mtlb hm ispe khelskte hain

## Threejs renderer and viewport

- Threejs render aur viewport jo hain hm wo deinge all the way hm import krke useThree() - react three fiber se.
- In React Three Fiber (R3F), the useThree hook is a utility provided by the library @react-three/fiber. It allows you to access and interact with the core Three.js components and settings within your R3F application.
- Access to the Three.js Scene: You can access the main Three.js scene instance, which represents the 3D scene where all objects are rendered. -- scene
- Access to the Three.js Renderer: You can access the Three.js renderer instance, which handles the rendering of the 3D scene onto the HTML canvas. -- gl
- Access to the Three.js Camera: You can access the Three.js camera instance, which determines the view and perspective of the 3D scene. -- camera
- Other Configuration and Utilities: useThree provides access to various other configuration options and utilities, such as setting the size of the viewport, adjusting the pixel ratio, and more.

- import { useThree } from '@react-three/fiber';

function MyComponent() {
const { scene, camera, gl } = useThree();

// You can now interact with scene, camera, and gl here

return (
<>
{/_ Your R3F components _/}
</>
);
}

By the above technique we can use the hook useThree() and by using this we will be able to use the renderer(gl), scene and the camera into our component.

## Position:

- hmare pass sare elements showcase horhe hain island,sky,bird -- hmare pass jo elements showcase horhe hain.
- hmne krna yh hai ke kuch elements ki position absolute krni hai to uske liye hm position ke axis ke jo array hain unko move krleinge apne hisab se
- 3d objects ke models ke mesh ko hm position dedeinge all the way aur unko hm scale bhi deskte hain as a parameter.

## Rotation of Island:

- Rotation mein hm jo logic lgaeinge wo logic to hai hi position ki, hmari position change hojaegi jb hm rotate kreinge
- Drag mein drop feature pe hm rotating apply kreinge all the way
- cursor grabbing ko apply krdeinge hm rotation pe
- hmare pass 3 scezein hain lastX(scroll value hai yh 3 chezon ki), rotation speed, damping factor yh spin krne mein help kregi.
- hm khali hold nhi kreinge island ko balke grab krke hold kreinge hm island ko aur phr hm move kreinge to in sb ko handle krne ke liye hmare pass functions hnge alag alag sb chezon ke liye.
- Rotation mein sbse important factor jo kaam ka hai hmara wo hai mouse se jb hm move kreinge up and down to kis trhn se hmare pass screen pe rotate hoga, uske ilawa dosra factor jo sbse important hai hmare pass wo hai keyboard ka ke kis trhn se move krega jb hm keyboard pe up and down keys press kreinge.
- uske bad jb hm mouse ya keyboard chordeinge to speed damping factor ki sorat mein slow hogi aur is trhn se hm control krleinge rotation ko.
- hmne 3 functions bnai hain handlePointerUp, handlePointerDown, handlePointerMove -- yh isliye bnae hain hmne take jb mouse se drag krien screen ko to wo functionality chal jae uspe.
- gl,handlePointerDown,handlePointerUp,handlePointerMove -- jb yh change hn chezein to bs hmare pass useEffect mein jo component did mount hai wo run hojae hmare pass.
- document.addEventListener("pointerdown", handlePointerDown);
  document.addEventListener("pointerup", handlePointerUp);
  document.addEventListener("pointermove", handlePointerMove);

  yh sare event listeners hmne bnae hain aur hm inko use kreinge apne pass aur phr hm inpe function sjo bnae hain wo apply krdeinge bs.

- hmne keys ke liye functions bnalie hain aur wo function hm useEffect mein eventListeners mein use krleinge apne pass all the way
- hm ab jo bhi hmne bnaye hain eventListeners yh sb hm use krienge apne pass aur sare handle functions mouse aur keyboard ke to bs ab hm jo kreinge wo yh hai ke bs insb ko use kreinge aur threejs mein in sb ko use krne ke liye jo chez sbse important use hoti hai hmare pass wo hai useFrame hook
- useFrame mein hme jitne frames mein bhi move krrha hai usko use krna hai apne pass ke kis trhn se move krrha hai
- normal tarike se hmne eventlisteners bnadie hain yh kaam nhi kreinge hmne inko document pe nhi blke canvas pe chalana hoga
- canvas get krrhe hain -- canvas hai 3D renderer ka DOM Element.
- Jitne functions bnae hain sara kaam ref pe horha hai hmare pass aur hm ref ko group mein derhe hain.

## Animation on Plane & Sky:

- Primitive tag ka faida yh hai ke baghair kisi mesh ke geometry ke hm direct scene call krskte hain primitive tag ke andar.
- Flexibility and Customization: You can customize the appearance and behavior of the 3D object by adjusting its properties and attributes directly within the <primitive> tag. This includes applying textures, materials, and complex geometries -- primitive tag mein attributes lgaleinge hm apne pass aur dosra yh ke hm primitive ko use kreinge kionke primitive tag sari complexities htake aata hai aur bs hm is tag ke andar apna 3d models ke scene call krleinge.
- Its easy to apply the animation on the plane coz its inside the primitive tag.
- const { actions } = useAnimations(animations, ref); -- useAnimations ka hook hai react-three/drei library se aur phr hm isko use kreinge apne pass aur bs hm actions ko use krte we frames hmein useFrames se call krke animation apply krdeinge primitive tag mein simply all the way.
- actions['Take 001'].play() -- ke builtin methods use krleinge hm
- error derha hai aur code break horha hai hmara hm kreinge yh ke state ko log krke error ko fix kreinge.
- Simple hmne call krlie hain methods action ke useEffect ke andar bs animate krne ke liye.
- hmne Sky pe bhi frames add krdie hain take 3d image lge move hoti wi.

## Animation on Bird

- Ref create kreinge aur mesh mein ref dedeinge uske ilawa actions find krleinge all the way aur hm actions pe animation apply kreinge all the way phr useEffect ke andar hm actions pe methods apply krdeinge all the way.
- phr according to the usecase hm rotation, size aur position ko execute krdeinge apni bird mein.
- har frame pe bird move krni chahiye hai hmare pass to hm useFrame use krrhe hain - uske ilawa hm sin wave maths ki use krrhe hain take rotate krein bird ko aur bari se choti ho aur choti se bari hojae

## POPUP coming in Home Screen after rotation

- Popup show hoega jb screen rotate hojaegi particular position tk aur phr hm popup pe click kreinge to hmein dosre page pe lejaegi screen redirect krke.
- Popup screen par hi hai hmein isko showcase krna hai jb rotate hoke aik position ajae camera ki to hm isko implement kreinge.
- Aik component bnana hai hmne HomeInfo aur phr us component ke andar hmne bs pass krdeinge currentStage as a props bs.
- Current Stage ki aik state bnaleinge hm aur uski jo stage bnai hai hmne usko dekhte we hmare pass yh show krega popup specific position pe.
- jb hmare pass current stage ki values change hngi to hmare pass diffrent popups show krega yh to hm isko krne ke liye homeInfo ke componnet ke andar hm aik object bnaleinge aur according to the state object ki values rerturn hojaeingi hmare pass.
- Different Popups show horhe hain hmein different currentStage ki values pe aur phr us hisab se hm redirect krrhe hain different pages pe

## Contact Page:

- heading aur phr labels aur inputs define krdie hain aur style krdie hain uske bad hmne functionality add krne ke liye fox ko move krne ke liye speed mein hmne onFocus aur onBlue builtin function hain yh use kreinge hm.
- onFocus -- attribute hai isse hota yh hai ke jb hm focus kreinge aur likheinge kisi input mein to yh builtin is liye hai.
- onBlur -- attribute hai yh isliye hai ke jb hm mitaeinge to yh builtin hai isliye.
- textarea -- ke tag ko use kreinge hm message likhne ke liye.
- functions bnalie hain hmne sare handleChange, handleSubmit, handleFocus & handleBlur -- aur iski madad se hm inpe sari logics apply krrhe hain.
- Email ka package hm use krrhe hain take form ke submit pe hmare pass email ajae. -- npm install @emailjs/browser
- focus aur blur se hm makesure kreinge what is happening all the way aur phr according to it hm fox ko move kreinge

### Emailjs -- npm install @emailjs/browser

- Email ka yh package hm use krleinge apne pass take submit form pe email send krein.
- emailjs ki website pe jake hm email send krte we 4 properties hain unko use krleinge apne pass as an argument aur wo hm console se utha leinge like service_ID, template_ID, public key.
- yh keys and id hm as a parameter pass kreinge when sending an email.
- service_Id -- leleinge hm jo email ki service use kreinge usse connect krke service_id leleinge hm.
- template_id -- template id hm leleinge jhn se hmne template lia hai -- whn hmne settings mein jake leleinge template id
- public_key -- account mein jake public key leleinge.
- form {} -- in the form object we will going to add the values we will be putting in all the way.

## Fox Animation in the contact page:

- Is animation mein hm yh kreinge ke logic yh lgegi ke jb hm form pe focus kreinge to hm jb type kreinge to fox move krna start hojaegi aur phr jb hm submit kreinge form ko to phr fox bhagegi tezi se.
- model mein hm fox.jsx bnaleinge aik file
- hm drag krleinge https://gltf.pmnd.rs/ yhn pe 3d fox ko aur phr hm jo jsx bnegi usko copy paste krdeinge fox ke component mein.

## GSAP Animation:

// Define the GSAP animation
useEffect(() => {
// gsap.from method
// gsap.from(groupRef.current.position, {
// duration: 2,
// y: -10, // Move the logo downwards by 10 units
// ease: "power3.out", // Use an easing function
// delay: 1, // Delay the animation by 1 second
// });

    // gsap.fromto method
    gsap.fromTo(
      groupRef.current.position, // Target object
      { x: 0 }, // Starting state
      {
        x: 10,
        duration: 2,
        ease: "power3.out",
        delay: 1,
        repeat: -1, // Repeat infinitely
        repeatDelay: 1, // Delay before each repeat
      } // Ending state
    );

}, []); // Run only once when component mounts

## Animating Logo on Home Screen: npm i framer-motion framer-motion-3d

- useFrame ko use krte we hm rotate kreinge apne cube ke logo ko apne pass.
- logoRef.current.rotation.x += 0.015; -- useFrame mein hm is trhn se use kreinge ref ko to rotate according to our need on x-axis or y-axis.
- orbitControls se hm kreinge move apne cube ko.
- <OrbitControls enableZoom={false} enablePan={false} /> -- enable zoom ko hm false krdeinge hm to hm jo zoom krrhe the wo nhi hoga aur phr agar enable pen ko bhi hm false krdeinge to phr yh move nhi krega.
- Framer motion ko bhi use krskte hain hm apne pass lekin drei ke packages ko use krke bht asan hai kaam krna

## About Page:

- This About page will have the description about the company what we actually do.
- drop-shadow -- isse shadow type effect ajaega aik hmare pass.
- constant folder bnarhe hain src mein aur phr usmein hm index.js file mein sara data daleinge apna jisko hm render kreinge apne pass -- is file mein hmare pass data hai different chezon ka joke hmein chahiye hai jese social links, experience, projects aur baki sara data jo hm map kreinge.
- button front aur botton back ki classes ko use kra hai hmne take animation lage buttons jo bnarhe hain hm shadow aur hover ki madad se.
- Experience show kreinge hm About page ke andar ke hmna kia kia kaam kra wa hai aur hm experience show kreinge with the help of react-vertical-timeline-component.

### react-vertical-timeline-component - npm install react-vertical-timeline-component:

- Yh aik npm package hai timeline show krne ke liye jo hm use krrhe hain.
- Work history show krne ke liye hm timeline ke package ko use krrhe hain.
- vertical-timeline-component ko hm use krke work experience show krskte hain, uske ilawa hm apna kaam bhi krskte hain aur uske ilawa hm vertical timeline component ko use kr rhe hain take work experience apna show krein.
- import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
  import 'react-vertical-timeline-component/style.min.css';

  Import krrhe hain VerticalTimeline ka main div as well as the VerticalTimelineElement take hm use krlein timeline ko.

- We will wrap everything in the Vertical Timeline.
- VerticalTimelineElements ke hm apne pass yhn pe props bhi pass kreinge aur phr hm unmein values deinge according to our need and requirement jese ke:
- date for date
- icon for the image
- contentStyle to actually style the content of the timelineElement.
- hmne sb properties ko use krke apne pass yhn pe create krdia hai timeline along with our requirement using the package.

### CTA:

- Hm call to action bhi provide kreinge end mein take hmare pass ajae client aur hm usse connect krlein all the way jo hmne kaam krna hai.
- "hr" -- se hm horizontal line bnarhe hain jiske through hm seperatar bna rhe hain all the way.
- aik naya component bnarhe hain hm CTA ke liye aur usko end mein about mein render kra rhe hain.
- button bna rhe hain hm aur hmein button redirect krrha hai dosre page ke uper all the way.

## Framer Motion:

- Motion ki library hai yh framer motion joke hm use kreinge to apply different animations and motion to the static components take wo ache lagein.
- npm install framer-motion -- motion graphics library.
- page transition ke effect ke liye hm framer motion ko use krrhe hain.
- transition.js ki aik nai file bnarhe hain jiske andar hm transition chala rhe hain.
- components ko export kreinge hm transition component ke through aur phr hm jin jin pages mein use krna hai hmne wahan pe hm export krte we transition ko component ko as a props send krdeinge.
- Hm transition component mein pore component ko as a props lerhe hain apne pass.
- akhir mein hm slide-in aur slide out ki jo transition bnai hai uski css likhleinge all the way aur phr hm uske ilawa kreinge yh ke app.js ko wrap krleinge take yh transition chale hmare pass all the way.
- transition page mein execute krdi hai meine all the way abhi tak aur wo chalrhi hai hmare pass yhn pe aur transition page ki show krrhi hai

## Projects Page:

- Ismein hm apne projects showcase krrhe hain.
- we are just showcasing our projects here and giving a Call to action at a bottom.

## Adding Sound to the Project:

- home mein import kreinge hm sakura music ko hm apne pass.
- import sakura from "../assets/sakura.mp3";
- 1-hmne sbse phle audio ko import krlia hai
- 2-phr hmne aik useRef se reference create kra hai audio ka aur hmne audio insert krdi hai new keyword se -- const audioRef = useRef(new Audio(sakura));
- 3-phr hmne audio ka volume set kra hai -- audioRef.current.volume = 0.5;
- 4-phr hmne audio ko loop krlia hai -- audioRef.current.loop = true;
- 5-phr hmne aik state bnai hai music ki ke play krrha hai music -- const [isPlayingMusic, setIsPlayingMusic] = useState(false);
- 6-phr hm useEffect ke andar apni logic bnarhe hain aur khrhe hain ke music ko play krdo():  
   useEffect(() => {
  // Agr isPlayingMusic ki state true hai to phr hm kaheinge ke music run hojae
  if (isPlayingMusic) {
  audioRef.current.play();
  }
  }, [isPlayingMusic]);
- agr isPlayingMusic ki state true nhi hai to bs hm return krdeinge -- audioRef.current.pause();

- Sound ka button derhe hain hm yhn pe home mein aur phr uspe hm apni state ko manage kreinge.
- Sound ki picture show krrhe hain hm agr band hai sound aur agr on hai to band ki picture icon show krrhe hain sound ki.
- Sound ko manage krrhe hain hm is trhn se aur phr hm kreinge yh ke sound ko manage krrhe hain state ki madad se.
- Sound ke music ko hm chala rhe hain aur logic bnarhe hain hm yhn pe.

## Swiper.js -- To apply horizontal slider to the website: -- npm i swiper

- Hm is library ki madad se horizontal carousel bna rhe hain.
- Kuch nhi kra hai hmne bs yh swiper/react se 2 packages import kre hain aur bs hm unko use krrhe hain.
- import { Swiper, SwiperSlide } from "swiper/react";
- Swiper se hm wrap krrhe hain apni pori component ko jahan pe hmne slider lgana hai aur phr hm usko use krrhe hain - uske andar hm SwiperSlide ke component ko use krrhe hain aur phr hm uske andar apna data show krrhe hain.
- Isko achi trhn se utilize krne ka aik behtreen tarika jo hai wo hai hmare pass ke hm array mein map krlein aur phr hm us hisab se array ko map krrhe hain aur uske andar swiperSlide ko use krrhe hain.
- Hm swiper ke modules ko bhi use krleinge aur import krleinge apne pass yhn pe aur phr hm unko utilize krleinge according to our requirement.
- import "swiper/swiper-bundle.css"; -- isko krne se hmare pass jo jo sare styles hain wo ajate hain sare ke sare aur phr isse hmare pass arrow, pagination aur baki chezein showcase hojaeingi all the way.
- scrollbar={{ draggable: true }} -- Isse hm scrollbar lgadeinge apne pass all the way.
- cubeEffects bhi hm lga skte hain modules mein yhn pe apne pass all the way.
- cubeEffects bhi hm import kreinge modules mein apne pass yhn pe.

## Portfolio Designing Page along the Slidebar:

- Image carousel pe hmne link bnadia hai aur ab hm portfolio ke page mein route horhe hain.
- ID get krleinge hm khn se ghus rhe hain is page ke andar from the useParams aur phr hm params ko use krte we apne pass kreinge yh template literal mein apne pass get krleinge array mein jake images ko portflio ki aur showcase krwadeinge apne pass.
- Data handling mein issues arhe the hmein to hmne krna yh hai ke proper dynamic route create krna hai aur phr hmne us route ke hisab se aur uske ilawa ismein hmare pass hm state mein data send krrhe hain aur props mein get krrhe hain wo sara data apne pass to iska sbse bara faida yh horha hai hmein ke hmari data handling aramse horhi hai.
  <NavLink
  to={{
                pathname: "/portfolio", // route krrhe hain hm yh
                state: { portfolio: project.portfolio }, //This is how we are actually sending the data
              }}

- In the portfolio component we will actually going to get all the data inside the props all the way and therefore we will be using the data of the images to showcase the portfolio images all the way.
- Navlink sahi kaam nhi krrha hai uski jagah hm use kreinge useNavigate hook aur useLocation hook.
- useNavigate ko use krte we hm navigate kr jaeinge hm dosre page ke uper uske ilawa hm data bhi send krskte hain useNavigate se aur phr hm kreinge yh ke us data ko hm get krleinge useLocation hook ko use krte we us page mein jhn hm navigate krchuke hain.

## Responsiveness:

- I will be creating the website responsive all the way take sb screens ke hisab se smne show ho data aur website phate nhi hmari.

## react-icons for the navbar

- mobile screen pe meine ham burger lgadia hai website mein aur website pe hmari jb hm home screen pe hnge to hmare pass hamburger show krega website pe.
- uske ilawa hmare pass nav bar show krega

# Extra Learning:

- Tailwind ki utility classes ko hmne use kra hai ismein all the way aur sbse phle hmne environment set krlia hai apne pass Tailwind.config.js ko update krke.
- navbar ka root element html-5 ka header tag rkha hai jo ke semantic element hai aur isko use krte we semantic element hai faida hoga
- using nav html-5 semantic element
- className={({ isActive }) => {isActive ? "text-blue-500" : "text-black"}} -- is technique ke through hmne apni classes pe ternary operator lgaya hai.
- ziada pages ko import kreinge to ghichpik hojaegi bht ziada to usko khtm krne ke liye hmare pass aik technique yh hai ke aik file bnaeinge hm index.js ki usmein hm aik sth export krdeinge to isse hoga yh ke jb aik sath export hojaeinge sb to phr aik sath import bhi hojaeinge hmare pass sb App ke page mein all the way.
- w-full -- it means that it will have the width full of the screen
- h-screen -- When you apply the h-screen class to an element, it expands the element vertically to fill the entire height of the viewport.
- When the DataComponent is asynchronously loaded (e.g., using React.lazy for code-splitting), the Suspense component will suspend rendering and show the fallback UI until the component and its data are ready to be displayed -- suspense component hmare pass jo use hota hai ismein hmein faida yh hota hai ke loading hojati hai phle aur phr bad mein hmein jb data ajata hai api ka to wo show krdeta hai aur jb tk koi aur sa loading component show krdeta hai
- Loader ke component mein hmne spinner bnadia hai css se animate property lgake aur suspense mein call krlia hai hmne yh component - w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin
- eslintrc mein hm apne pass src add krdeinge aur phr isse hoga yh ke hmare pass lig
- useGLTF hook jo hm import krte hain drei se uski madad se hm apni 3D images ko screen pe show krwaskte hain all the way.
- we can get the positions from the useState as well and we can get things done all the way and we can also manipulate it.
- we can use useSpring hook to actually maintain the position as well and by using this we can animate the 3D model all the way in our application.
- cursor-grab: initially jb kisi chez ko pakarna hoga to hm yh class use kreinge.
- cursor-grabbing: jb koi chez hm grab kr chuke hnge to hm usko move krte we grabbing ki class ko use kreinge apne pass.
- e.propagation -- Prevent the click event from bubbling up.
- Aik sbse important chez yh hai ke hm primitive tag ke andar geometry call krleinge 3D element ki aur phr uske ilawa hm material bhi call krleinge aur uske ilawa hm position bhi call krleinge -- geometry se murad jese boxGeometry to builtin hmare pass ajaega box uske bad material jo hmne use kra hai usmein hmare pass color aega ke kia color hm use krrhe hain aur phr uske bd position hai ke kia position hai x,y,z axis pe aur coordinates kia hain.
- CurrentStage hai rotation ko ghomne ke liye aur isko hm ghumaeinge all the way to stage change hojaegi baar baar.
- leading-snug se line height change hojati hai hmare pass tailwind css mein.
- box shadow ki alag alag bht sari properties dedi hain hmne to isse hoega yh ke 3D image lgegi yh.
- position aur rotation ke attribute agar mein implement krounga mesh pe to yh apply krdeinge according to the requirement.
- import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY -- aise call krleinge hm apne pass env variables.
- environment variables mein hm jb bhi kaam kreinge to hmein string ki zrorat nhi pregi ke kese bnate hain, bs environment variable ka naam aur bs hm use krleinge key without any comma or string.
- /_ this is how we create custom css classes in tailwind _/
  .blue-gradient_text {
  @apply bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent;
  }
- Styling add krne ke liye hm style={{ margin: 0 }} ke tag ko use kreinge.
- h-[100vh] -- iske through hm height derhe hain screen ko
- viewport height and width is actually the viewing point of the enduser to the screen that how they actually look the screen.
- plane mein aur island mein jo props send kreinge hm wo props wo hnge jo ke mesh leta hai take hm phr ...props dedein as an argument.
- keyboard ki arrow keys ko press krke hm use kreinge take rotate krlein lekin uske liye hmne speed ke sath khelna hoga aur jb hm speed ke sath kheleinge to phr sahi kaam krega aur natural rotation lgegi.
- viewport meta ke tag mein bhi hm use krte hain aur yh viewing point btata hai hmein all the way.
- Hm apne 3D scenes ke andar HTML aur Text include krskte hain with the help of the Html, Text provided by the drei library aur iske through hm insert krskte hain 3D model ke group ya mesh ke andar HTML aur text aur usko apne hisab se style krskte hain hm.
- Drei ka component float hm use krskte hain to animate -- yh aik vip chez hai drei aur iske prebuild components.
- React Scroll -- npm library to be used to scroll the projects.
- useNavigate hook is provided by react-router-dom aur iske through hm navigate krskte hain.
- useNavigate ke andar -- -1 as an argument deinge hm to iska mtlb yh hota hai ke hmein previous page pe lejao.
- flex-1 se equal amount of space leinge div mein.
- Sticky se navbar ko stick krdeinge hm top pe.
- Sticky aur bottom-0 se hmare pass footer jo hai wo bilkul neche chipak jaega all the way.
