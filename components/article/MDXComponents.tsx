export const mdxComponents = {

h1:(props:any)=><h1 className="mt-16 text-5xl font-bold" {...props}/>,

h2:(props:any)=><h2 className="mt-12 text-3xl font-bold" {...props}/>,

p:(props:any)=><p className="mt-6 leading-9 text-gray-700" {...props}/>,

blockquote:(props:any)=>

<blockquote
className="my-8 border-l-4 border-emerald-500 pl-6 italic text-gray-600"
{...props}
/>

};