const myDiv = document.getElementById("root");

const staticPage =(
    <div>
        <img src="1611079-removebg-preview.png"></img>
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </div>
);


ReactDOM.render(staticPage, myDiv);