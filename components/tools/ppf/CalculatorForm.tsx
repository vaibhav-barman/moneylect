import Slider from "@/components/ui/Slider";

type Props = {

investment:number;

years:number;

rate:number;

setInvestment:(n:number)=>void;

setYears:(n:number)=>void;

setRate:(n:number)=>void;

};

export default function CalculatorForm({

investment,

years,

rate,

setInvestment,

setYears,

setRate,

}:Props){

return(

<div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm">

<h2 className="text-2xl font-bold">

PPF Details

</h2>

<p className="mt-2 text-gray-500">

Adjust the values below.

</p>

<div className="mt-10 space-y-10">

<Slider

label="Yearly Investment"

value={investment}

min={500}

max={150000}

step={500}

prefix="₹"

onChange={setInvestment}

/>

<Slider

label="Investment Period"

value={years}

min={15}

max={50}

suffix=" Years"

onChange={setYears}

/>

<Slider

label="Interest Rate"

value={rate}

min={5}

max={10}

step={0.1}

suffix="%"

onChange={setRate}

/>

</div>

</div>

);

}