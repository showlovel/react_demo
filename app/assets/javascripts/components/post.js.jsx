var Post = React.createClass({
  render: function() {
    return (
      <div className="plist__item post">
        <div className="post__title">Title: {this.props.title}</div>
        <div className="post__content">{this.props.content}</div>
        <div className="post__timestamp">
          <span> {this.props.created_at} </span>
        </div>
      </div>
    );
  }
});

var PostList = React.createClass({
  render: function(){
    var postList = this.props.posts.map(function(post) {
      return (
        <Post title={post.title} content={post.content} created_at={post.created_at} />
      )
    });

    return (
      <div className="post-list">
        {postList}
      </div>
    )
  }
});
