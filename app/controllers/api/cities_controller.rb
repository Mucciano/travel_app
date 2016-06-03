class Api::CitiesController < ApplicationController

  def index
    render json: { cities: City.all }
  end

  def create
    new_city = City.create city_params
    render json: {city: new_city}

  end

  def show
    show_city = City.find params[:id]
    render json: {city: show_city}

  end

  def update
    update_city = City.find params[:id]
    update_city.update city_params
    render json: {action: 'updated'}

  end

  def destroy
    destroy_city = City.find params[:id]
    destroy_city.destroy
    render json: {action: 'deleted'}
  end

  private

  def city_params
  params.require(:city).permit(:name, :country, :image, :food, :nightlife, :attractions, :visited)
  end

end
