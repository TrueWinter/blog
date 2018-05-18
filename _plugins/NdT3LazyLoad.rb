# Idea for code from https://github.com/ArneGockeln/jekyll-umlauts/blob/master/lib/jekyll-umlauts.rb
module Jekyll
  class NdT3LazyLoad < Generator
    safe true
    priority :highest

    def generate(site)

      site.pages.each do |page|
        page.content = replace(page.content)
      end

      site.posts.docs.each do |post|
        post.content = replace(post.content)
      end
    end

    def replace(content)
      content.gsub!(/<img src=(?:'|")(.*)(?:'|")\s(.+=".+")*>/i, '<img src=\'\' data-src=\'\1\' \2>')
      content
    end

  end
end