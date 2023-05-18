class PagesController < ApplicationController
  def home
    @products = Product.order(created_at: :desc)
  end

  def pricing; end

  def about; end

  def contacts; end
  
end
