class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users, each_serial
  end
  def show
  end
  def create
  end
end
