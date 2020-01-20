import React, {Component} from 'react'
import Title from './Title'
import {FaHiking, FaCocktail, FaShuttleVan, FaBeer } from 'react-icons/fa'

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktail",
                info: "lorem ipsum dolor sit amet constructor adpiscing elit, Magni, corposi!"
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "lorem ipsum dolor sit amet constructor adpiscing elit, Magni, corposi!"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: "lorem ipsum dolor sit amet constructor adpiscing elit, Magni, corposi!"
            },
            {
                icon: <FaBeer/>,
                title: "Strongest Beer",
                info: "lorem ipsum dolor sit amet constructor adpiscing elit, Magni, corposi!"
            }
        ]
    }
    render(){
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (<article key={index} className="service">  
                            <span> {item.icon} </span>
                            <h6> {item.title} </h6>
                            <p> {item.info} </p>
                           </article>);
                    })}
                </div>
            </section>
        )
    }
    
}

export default Services