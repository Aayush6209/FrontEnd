import React, {useState, useEffect} from "react";
import {AiOutlineSend} from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md"
import { InputGroup, InputGroupAddon, Button, Input ,Tooltip} from 'reactstrap';

import {connect} from "react-redux";
import ESSpinner from "../UI/ESSpinner";
import * as eventActions from "../store/actions/eventActions";
import * as actionTypes from "../store/actions/actionTypes";

const CommentSection = (props) => {
  useEffect(() => {
    props.displayComments(props.event.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.showAlert]);

  if (props.showAlert) {
    setTimeout(() => {
      props.hideAlert();
    }, 2000);
  }

  //for tooltip
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  const [comment, setComment] = useState("");

  let commentsList=[];

  if(!props.loading && typeof props.comments !== "undefined" && props.comments!==null){
      commentsList=props.comments;
  }
  let commentsRender=<ESSpinner />;

  commentsRender=<div className={ props.role !== "Admin" ? "CommentsDiv" : "CommentsDivAdmin"}>
  {commentsList.map((comment, index) => (
    <div key={index} className="Comment">
      <div className="CommentUser">
        {" "}
        <MdAccountCircle size="25px" /> {comment.student.first_name+" "+ comment.student.last_name}{" "}
      </div>
      <div className="CommentText">{comment.comment_text}</div>
    </div>
  ))}
</div>

  return (
    <div className= { props.role !== "Admin" ? "CommentSectionDiv" : "CommentSectionDivAdmin" }>
      {commentsRender}
      <div className="CommentAdd">
        <InputGroup>
          <Input
            placeholder="Type your comment"
            name="comment"
            autoComplete="off"
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
                comment.length>0 && props.postComment(props.sid, props.token, comment, props.event.id);
                setComment("");
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
      role : state.user.role
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      displayComments: (id)=>dispatch(eventActions.displayComments(id)),
      postComment: (sid, token, comment, id)=>dispatch(eventActions.postComment(sid, token, comment, id)),
      hideAlert : ()=>dispatch({type : actionTypes.HIDE_EVENT_ALERT})
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);