class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_filter :check_subdomain

  def check_subdomain
    if Rails.env.production?
      canonical_hostname = 'troispetitesruches.crouzier.com'
      #  && request.subdomain != 'preprod'
      if request.subdomain != 'troispetitesruches'
        redirect_to host: canonical_hostname, controller: params[:controller], action: params[:action], :status => :moved_permanently
      end
    end
  end
end
