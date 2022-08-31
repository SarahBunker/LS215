def timer
  raise RuntimeError,'No block given' unless block_given?
  before = Time.now
  10000000.times { yield }
  after = Time.now

  puts "#{after - before} seconds"
end

timer { |x| i = x.to_s } # 1.731092053 seconds

timer # No block given (RuntimeError)
