type Props = {
  onSelect:(value:number)=>void;
};

const values=[
50000,
100000,
200000,
500000,
1000000,
];

export default function QuickAmounts({
onSelect,
}:Props){

return(

<div className="mt-6 flex flex-wrap gap-3">

{values.map((amount)=>(

<button

key={amount}

onClick={()=>onSelect(amount)}

className="rounded-full border border-gray-300 px-4 py-2 transition hover:border-emerald-500 hover:bg-emerald-50"

>

₹{amount.toLocaleString("en-IN")}

</button>

))}

</div>

);

}