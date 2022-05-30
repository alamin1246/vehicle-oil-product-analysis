import React from "react";
import './Blog.css';

const Blogs = () => {
    return (
        <div className="blogs">
            <div className="blog1">
                <h1>
                    What is Context API?
                </h1>
                <p>
                    1. Context API is a React API that can solve a variety of state management issues that modern apps confront. <br />
                    2. The React library Context API is a component structure that allows us to send specified types of data across all layers of the application. <br />
                    3. It's designed to address the issue of prop drilling. <br />
                    4.The Context API has always existed, but it was deemed experimental at the time. <br />
                    5.The API was improved to be more stable in the future. <br />
                </p>
            </div>
            <div className="blog2">
                <h1 >
                    What are semantic elements?
                </h1>
                <p>
                    1. Semantic elements are those that clearly express their meaning in a form that is understandable by both humans and machines.<br />
                    2. For their structure, semantic elements have specific attributes.<br />
                    3. Both the browser and the developer can understand the meaning of a semantic element.<br />
                    4. A semantic element's defining feature is that it communicates its meaning to both the developer and the browser.<br />
                    5. For example of semantic elements are - header , footer, article, form , table tags etc.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
