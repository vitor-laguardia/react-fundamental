import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
// import styles from './Post.module.scss';
import { Container, Rate, Subtitle } from './styles';
export default function Post(props) {
  return (
    <>
      <Container removed={props.post.removed}>
        <PostHeader post={props.post} onRemove={props.onRemove} />
        <Subtitle>{props.post.subtitle}</Subtitle>
        <Rate>Media: {props.post.likes / 2}</Rate>
      </Container>
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
    removed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
