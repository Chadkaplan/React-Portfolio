import React from 'react';

import Card from '../components/Card';

import aparki from '../assets/images/aparki.png';
// import youtube from '../assets/images/youtube.png';
// import evverest from '../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    // <div class="projectPic"id="project-1"><a href="https://sidh80.github.io/apARKi/"><img class="projectSize" src="./assets/images/aparki.png"></a>apARKi</div>
    // <div class="projectPic"id="project-2"><a href="https://chadkaplan.github.io/Tic-Tac-Toe/"><img class="projectSize" src="./assets/images/tictactoe.jpg"></a>Tic-Tac-Toe</div>
    // <div class="projectPic"id="project-3"><a href="https://chadkaplan.github.io/Elusive-Button/"><img class="projectSize" src="./assets/images/elusive button.jpg"></a>Untouchable Button</div>
    // <div class="projectPic"id="project-4"><a href="https://chadkaplan.github.io/Train-Station/"><img class="projectSize" src="https://via.placeholder.com/150"></a>Project 4</div>

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'apARKi',
                    subTitle: 'Parking made simple',
                    imgSrc: aparki,
                    link: 'https://sidh80.github.io/apARKi/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'apARKi',
                    subTitle: 'Parking made simple',
                    imgSrc: aparki,
                    link: 'https://sidh80.github.io/apARKi/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'apARKi',
                    subTitle: 'Parking made simple',
                    imgSrc: aparki,
                    link: 'https://sidh80.github.io/apARKi/',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;