# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.
include Nanoc::Helpers::Rendering
include Nanoc3::Helpers::LinkTo
include Nanoc3::Helpers::Blogging

def previous_link
	prv = sorted_articles.index(@item) - 1
	if sorted_articles[prv].nil?
		return ""
	else
		link_to('← Previous', sorted_articles[prv].reps[0])
	end
end

def next_link
	nxt = sorted_articles.index(@item) + 1
	if sorted_articles[nxt].nil?
		return ""
	else
	link_to('Next &rarr;', sorted_articles[nxt].reps.find { |r| r.name == :default })
	end
end