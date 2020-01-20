import React, {Component} from "react";
import defaultBcg from '../images/room-2.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        
        //if room name doesnt exist in context i.e undefined
        if (!room) {
            return (
             <div className="error">
                <h3>No such name can be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    Back to Rooms
                </Link>
            </div>
            );
        }

        //destructuring rooms i.e getting every property of room, room.extras, room.pets, etc
         const {name, size, price, description, capacity, extras, breakfast, pets, images} = room;
        //  to grab the individual images out of the array
        //mainImg holds the first image in the array of images i.e images[0]
        //...defaultImg holds the rest of the images as an array
        const [mainImg, ...defaultImg] = images; //we do this to separate the hero image from the rest of images displayed underneath
        return (
            <>
            {/* makes single room acesss image dynamically using styled component */}
            {/* <StyledHero img={images[0] || this.state.defaultBcg} >//to display first image first */}
            <StyledHero img={mainImg || this.state.defaultBcg} >
                <Banner title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        Back to Rooms
                    </Link>
                </Banner>
            </StyledHero> 
            <section className="single-room">
                <div className="single-room-images">
                    {/* {images.map((item, index) => ( //to display all images in array including first one */}
                    {defaultImg.map((item, index) => (
                        <img key={index} src={item} alt={name} />
                    ))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3> details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>Price : ${price} </h6>
                        <h6>Size : ${size} SQFT </h6>
                        <h6>
                            Max Capacity : {" "}
                            {capacity > 1 ? `${capacity} people` : 
                            `${capacity} person`}
                        </h6>
                        <h6> {pets ? "Pets allowed" : "No Pets Allowed" } </h6>
                        <h6> {breakfast && "Free Breakfast included"} </h6>
                    </article>
                </div>
            </section>

            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index) => {
                    return <li key={index}> - {item}</li>
                    })}
                </ul>
            </section>
            </>  
        )
    }
}

export default SingleRoom

