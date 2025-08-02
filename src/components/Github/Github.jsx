import { useLoaderData } from "react-router-dom";
function Github() {
 const data = useLoaderData();
  return (
    <div> 
      <h1 className="bg-gray-600 text-2xl p-4 text-center text-white ">
        Followers: {data.followers}
      </h1>
    </div>
  );
}
export default Github;


export  const GithubApi= async ()=>{
 const response = await fetch("https://api.github.com/users/hassnain512")
  const data = await response.json();
  return data;
}