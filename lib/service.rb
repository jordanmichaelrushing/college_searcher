module Service
  extend ActiveSupport::Concern

  class_methods do
    def process(*args)
      new(*args).process_service
    end

    def process_and_reveal_service(*args)
      service = new(*args)
      service.process_service
      service
    end
  end

  def process_service
    # could add benchmarking, generic error handling/logging, etc
    process
  end

  private

  def process
    raise NotImplementedError
  end

  def flipper
    Fms::Application.flipper
  end

  def map_downstream_errors(from:, to:, prefix: nil)
    er_prefix = prefix.present? ? "#{prefix}." : nil

    from.errors.messages.each_pair do |er_key, messages|
      to.errors.add("#{er_prefix}#{er_key}", messages.uniq.join(', '))
    end
  end
end
