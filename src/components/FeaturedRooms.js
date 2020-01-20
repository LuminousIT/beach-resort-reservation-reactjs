import React, {Component} from 'react';
import {RoomContext} from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render(){
        //rename passed down featuredRooms as rooms
        let {loading, featuredRooms: rooms} = this.context;
        rooms = rooms.map(room=> {
            return <Room key={room.id} room={room} />
        })
        return (    
            <section className="featured-rooms">
                 <Title title="Featured Rooms" />
                 <div className="featured-rooms-center">
                    {loading ? <Loading/>:rooms}
                 </div>
                 
            </section>
        )
    }
}

export default FeaturedRooms