class ReactController < ApplicationController
  def index
    @posts = Post.all
    @ads = [{image: 'ttt'}]
  end
end