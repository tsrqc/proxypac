function FindProxyForURL(url, host) {
	if ((dnsDomainIs(host, "as.com")) ||
	(dnsDomainIs(host, "marca.com")))
	{
    		return "DIRECT";
 	}
}
