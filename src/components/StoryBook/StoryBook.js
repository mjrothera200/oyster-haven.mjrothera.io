import React from 'react';
import { Component } from 'react';

import Parser from 'html-react-parser';

class StoryBook extends Component {
    state = {
        text: '',
        contents: [],
        contenturl: ''
    };
    constructor(props) {
        super(props);
        this.state = {
            contenturl: props.contenturl,
            contents: []
        };
    }

    getContent() {
        const headers = {};
        try {
            fetch(
                this.state.contenturl,
                {
                    method: 'GET',
                    headers,
                }
            )
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    this.setState(() => {
                        return {
                            contents: json.contents
                        };
                    });
                });
        } catch (error) {
            console.log('Error: ' + error);
        }
    }

    // Lifecycle methods
    componentDidMount() {
        console.log('StoryBook mounted');
        this.getContent()
    }

    componentWillUnmount() {
        console.log('StoryVook unmounted');
    }

    render() {
        return (

            
            <div>
                {this.state.contents.map((content, index) => (
                    <div key={content.id} className="bx--row storybook-body">
                        <div className="bx--col">

                            { content.image && 
                                <img src={content.image} className={content.imageClass} alt={content.imageAlt}/>
                            }
                            {Parser(content.text)}
                        </div>
                    </div>
                )
                )
                }
            </div>

        );
    }
}

StoryBook.defaultProps = {

};

export default StoryBook;
