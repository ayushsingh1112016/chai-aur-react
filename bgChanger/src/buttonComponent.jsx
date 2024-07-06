let colorTxt = () => {
    return txt;
}
function BtnComp ({txt, colour}) {
    <button onClick={colorTxt} className={colour}>{txt}</button>
}
export default BtnComp();