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
- Directional Light is the light coming from the distance source just like sun -

##### Extra Learning:

- Tailwind ki utility classes ko hmne use kra hai ismein all the way aur sbse phle hmne environment set krlia hai apne pass Tailwind.config.js ko update krke.
- navbar ka root element html-5 ka header tag rkha hai jo ke semantic element hai aur isko use krte we semantic element hai faida hoga
- using nav html-5 semantic element
- className={({ isActive }) => {isActive ? "text-blue-500" : "text-black"}} -- is technique ke through hmne apni classes pe ternary operator lgaya hai.
- ziada pages ko import kreinge to ghichpik hojaegi bht ziada to usko khtm krne ke liye hmare pass aik technique yh hai ke aik file bnaeinge hm index.js ki usmein hm aik sth export krdeinge to isse hoga yh ke jb aik sath export hojaeinge sb to phr aik sath import bhi hojaeinge hmare pass sb App ke page mein all the way.
- w-full -- it means that it will have the width full of the screen
- h-screen -- When you apply the h-screen class to an element, it expands the element vertically to fill the entire height of the viewport.
- When the DataComponent is asynchronously loaded (e.g., using React.lazy for code-splitting), the Suspense component will suspend rendering and show the fallback UI until the component and its data are ready to be displayed -- suspense component hmare pass jo use hota hai ismein hmein faida yh hota hai ke loading hojati hai phle aur phr bad mein hmein jb data ajata hai api ka to wo show krdeta hai aur jb tk koi aur sa loading component show krdeta hai
- Loader ke component mein hmne spinner bnadia hai css se animate property lgake aur suspense mein call krlia hai hmne yh component - w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin
