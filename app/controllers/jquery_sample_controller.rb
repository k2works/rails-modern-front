class JquerySampleController < ApplicationController
  def jquery_sample_animation
  end

  def jquery_sample_menu
  end

  def jquery_sample_form
  end

  def jquery_sample_text
  end

  def jquery_sample_image
    respond_to do |format|
      format.html
      format.json
    end
  end
end
