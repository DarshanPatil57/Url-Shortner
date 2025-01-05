import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Filter } from "lucide-react";
import { Error } from "@/Components/Error";
import useFetch from "@/hooks/useFetch";
import { getUrls } from "@/db/apiUrls";
import { UrlState } from "@/Context";
import { getClickForUrl } from "@/db/apiClick";
import { LinkCard } from "@/Components/LinkCard";

export const Dashboard = () => {
  const [searchLinks, setSearchLinks] = useState("");
  const { user } = UrlState();
  const { error, data:urls, fn:fnUrls } = useFetch(getUrls, user?.id);
 const {data:clicks, fn:fnClicks} = useFetch(getClickForUrl,urls?.map((url)=> url.id))

 useEffect(()=>{
  fnUrls()
 },[])

 useEffect(()=>{
  if(urls?.length) fnClicks()
 },[urls?.length])


 const filterUrls = urls?.filter((url)=> url.title.toLowerCse().includes(searchLinks.toLowerCase()) )


  return (
    <div>
      <div className="flex flex-col gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Links Created</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{urls.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Clicks</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{clicks.length}</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between">
        <h1 className="text-4xl font-extrabold">My Links</h1>
        <Button>Create Link</Button>
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder="Filter Links"
          value={searchLinks}
          onChnage={(e) => setSearchLinks(e.target.value)}
        />
        <Filter className=" absolute top-2 right-2 p-1" />
      </div>
      { error && <Error message={error?.message} />}
      {(filterUrls || []).map((url,id)=>{
        return <LinkCard key={id} url={url} fetchuUrls={fnUrls}/>
      })}
    </div>
  );
};
