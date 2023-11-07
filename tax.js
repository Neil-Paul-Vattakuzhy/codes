let tax=0;
const tax10=112500
const tax5=12500

document.getElementById('calculate').addEventListener('click',()=>{
    
    let ctc = Number(document.getElementById('ctc').value);
    let pf= Number(document.getElementById('pf').value);
    let misc = Number(document.getElementById('misc').value);

    console.log(typeof(ctc))

    let basictax=calctax(ctc);

    let totaltax=basictax+pf+misc;
    document.getElementById('tax').value=totaltax;

    
})

function calctax(sal){
    if(sal>1000000)
    {
        tax=tax+tax10+((sal-1000000)*.3)
        return tax;
    }
    else if(sal>500000)
    {
        tax=tax+tax5+((sal-500000)*.2)
        return tax;
    }
    else if(sal>250000)
    {
        tax=tax+((sal-250000)*.05)
        return tax;
    }
}