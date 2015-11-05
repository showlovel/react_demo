var Ad = React.createClass({
  render: function(){
    return (
      <div className='ad'>
        {this.props.image}
      </div>
    );
  }
});

var AdList = React.createClass({
  render: function(){
    var adList = this.props.ads.map(function(ad) {
      return (
        <Ad image={ad.image} />
      );
    });

    return (
      <div>
        {adList}
      </div>
    )
  }
});