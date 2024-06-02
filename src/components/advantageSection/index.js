import'./index.css';

export function AdvantageSection(props){
    return(
        <div id="advantage">
            <img src={props.advantageImage} alt="" id="advanra"/>
            <div id = "advantageContent">
                <h3>{props.advantageTitle}</h3>
                <p>{props.advantageDescription}</p>
            </div>
            
        </div>
    );
}