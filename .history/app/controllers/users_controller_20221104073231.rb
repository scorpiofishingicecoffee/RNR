class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, each_serializer: UserSerializer
  end
  def show
    @user = User.find(params[:id])
    render json: @user
  end
  def create
    @user = User.create
  end
end
