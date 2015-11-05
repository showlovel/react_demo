var PostWindow = React.createClass({
  render: function(){
    return (
      // <div></div>
      <PostList posts={this.props.posts} />
      <AdList ads={this.props.ads} />
    )
  }
});
