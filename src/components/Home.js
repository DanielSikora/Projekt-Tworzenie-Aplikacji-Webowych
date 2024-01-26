import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./NavBarComponent";
import Cards from "./Cards";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {


    const [musics, setMusics] = useState([])
    const getMusics = () => {
        axios.get('http://localhost:3001/api/posts')
            .then((restore) => {
                setMusics(restore.data)
            })
    }

    

    useEffect(() => {
        getMusics()
    }, [])


    return (
        <>

            <NavBarComponent></NavBarComponent>
            <div className={'home'}>
                <Cards musics={musics} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}></Cards>
                <Footer></Footer>
            </div>
            


        </>
    );
}

export default Home;




