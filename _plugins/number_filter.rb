module Jekyll
  module NumberFilter
    def number_with_delimiter(number)
      number.to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse
    end
  end
end

Liquid::Template.register_filter(Jekyll::NumberFilter) 