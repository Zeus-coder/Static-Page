
const MyDiv = document.getElementById("root");

const navbar = (
    <nav>
        <ul>
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
            <li><a>Contact Us</a></li>
            <li><a>Projects</a></li>
        </ul>

    </nav>
);

ReactDOM.render(navbar,MyDiv);

console.log(MyDiv.append(JSON.stringify(navbar)));

