function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, "as.com"))
	{
    		return "DIRECT";
 	}
}
