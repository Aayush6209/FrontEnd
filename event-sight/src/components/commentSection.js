import React, {useState} from "react";
import {AiOutlineSend} from "react-icons/ai";
import {FaUser} from "react-icons/fa"
import { InputGroup, InputGroupAddon, Button, Input ,Tooltip} from 'reactstrap';

const CommentSection = ()=>{
    //just for testing
    var foo = [];
    for (var i = 1; i <= 13; i++) {foo.push(i);}

    //for tooltip
    const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);


    return <div className="CommentSectionDiv">
        <div className="CommentsDiv">
        {foo.map(f=>(<div key={f} className="Comment">
            <div className="CommentUser"> <FaUser/> {"Shivam Arora"} </div>
            <div className="CommentText" >{"This is the Comment."}</div>
        </div>))}
        </div>
        <div className="CommentAdd">
    <InputGroup>
       <Input placeholder="Type your comment"/>
        <InputGroupAddon addonType="append">
            <Button color="danger" id="postButton"><AiOutlineSend size="20px"/></Button>
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="postButton" toggle={toggle}>Post Comment</Tooltip>
        </InputGroupAddon>
        </InputGroup>
</div>
    </div>
    
}


export default CommentSection;