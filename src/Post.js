import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

export default function Post(props) {
  return (
    <>
      <article>
        <PostHeader post={props.post} onRemove={props.onRemove} />
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Media: {props.post.likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
