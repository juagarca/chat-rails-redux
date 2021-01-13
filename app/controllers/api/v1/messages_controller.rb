class Api::V1::MessagesController < ApplicationController
  before_action :retrieve_channel

  def index
    messages = Message.where(channel: @channel)
    render json: messages
  end

  def create
    content = params[:content]
    message = Message.create(user: current_user, channel: @channel, content: content)
    render json: message
  end

  private

  def retrieve_channel
    @channel = Channel.find_by(name: params[:channel_id])
  end
end
