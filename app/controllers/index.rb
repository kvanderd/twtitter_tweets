get "/" do
  erb :index
end
 
post "/" do 
  the_tweet = params[:tweet]
  Twitter.update(the_tweet)
  redirect "/"
end