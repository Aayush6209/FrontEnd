import React, {useState, useEffect} from "react";
import {AiOutlineSend} from "react-icons/ai";
import {FaUser} from "react-icons/fa"
import { InputGroup, InputGroupAddon, Button, Input ,Tooltip} from 'reactstrap';

import {connect} from "react-redux";
import ESSpinner from "../UI/ESSpinner";
import * as eventActions from "../store/actions/eventActions";

const CommentSection = (props) => {
  useEffect(() => {
    props.displayComments(props.event.id);
  }, [props.showAlert]);

  if (props.showAlert) {
    setTimeout(() => {
      props.hideAlert();
    }, 3500);
  }

  //for tooltip
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const [comment, setComment] = useState("");

  let commentsList=[];

  if(!props.loading && typeof props.comments !== "undefined" && props.comments!==null){
      commentsList=props.comments;
      console.log(commentsList);
  }
  let commentsRender=<ESSpinner />;

  commentsRender=<div className="CommentsDiv">
  {commentsList.map((comment, index) => (
    <div key={index} className="Comment">
      <div className="CommentUser">
        {" "}
        <FaUser /> {comment.split(',')[1]+" "+ comment.split(',')[2]}{" "}
      </div>
      <div className="CommentText">{comment.split(',')[3]}</div>
    </div>
  ))}
</div>

  return (
    <div className="CommentSectionDiv">
      {commentsRender}
      <div className="CommentAdd">
        <InputGroup>
          <Input
            placeholder="Type your comment"
            name="comment"
            value={comment}
            onChange={(event) => {
              setComment(event.target.value);
            }}
          />
          <InputGroupAddon addonType="append">
            <Button
              color="danger"
              id="postButton"
              onClick={() => {
                console.log(comment);
              }}
            >
              <AiOutlineSend size="20px" />
            </Button>
            <Tooltip
              placement="bottom"
              isOpen={tooltipOpen}
              target="postButton"
              toggle={toggle}
            >
              Post Comment
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      showAlert : state.event.showAlert,
      AlertText : state.event.AlertText,
      AlertColor : state.event.AlertColor,
      sid : state.user.sid,
      token : state.user.token,
      comments: state.event.comments,
      loading: state.user.loading,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      displayComments: (id)=>dispatch(eventActions.displayComments(id)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);