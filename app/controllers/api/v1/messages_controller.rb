class Api::V1::MessagesController < ApplicationController
  before_action :retrieve_channel

  def index
    messages = Message.where(channel: @channel)
    render json: messages
  end

  def create
  end

  private

  def retrieve_channel
    @channel = Channel.where(name: params[:channel_id])
  end
end
