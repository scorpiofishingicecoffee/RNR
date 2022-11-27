class SessionsController < ApplicationController
  def create
    @user = User.find_by_email(params[:email])
    if @user&.authenticated(params[:password])
      session[:user_id] = @user.id
      render json: @user, status: :ok
    else
      render json: "invalid credentials. try again", status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
  end
end
