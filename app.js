const steps = [
"Step 1: Glucose → Glucose-6-phosphate (Hexokinase)",
"Step 2: Glucose-6-phosphate → Fructose-6-phosphate (Isomerase)",
"Step 3: F6P → F1,6BP (Phosphofructokinase — Rate-limiting)",
"Step 4: F1,6BP → DHAP + G3P (Aldolase)",
"Step 5: DHAP ↔ G3P (Isomerase)",
"Step 6: G3P → 1,3-BPG (Dehydrogenase)",
"Step 7: 1,3-BPG → 3-PG (Kinase)",
"Step 8: 3-PG → 2-PG (Mutase)",
"Step 9: 2-PG → PEP (Enolase)",
"Step 10: PEP → Pyruvate (Pyruvate kinase)"
];
let index=0;
function updateContent(){ document.getElementById("app").innerHTML=`<h2>${steps[index]}</h2><p>${index+1} / ${steps.length}</p>`; }
document.getElementById("nextBtn").addEventListener("click",()=>{ index=(index+1)%steps.length; updateContent(); });
updateContent();