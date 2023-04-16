
<?php
    $myfile = fopen("status_ferry.txt", "w");

    $dom = new DOMDocument();
    $html = file_get_contents('https://www.agentschapmdk.be/nl/veerdiensten/veerdienst-kruibeke-hoboken');
    libxml_use_internal_errors(true);
    $dom->loadHTML($html);
    libxml_use_internal_errors(false);
    $xpath = new DOMXPath($dom);
    $divKruiHob = $xpath->query('//div[contains(@class, "text-primary status__text status__text--italic")]')->item(0);
    fwrite($myfile, trim($divKruiHob->textContent));
    fwrite($myfile, "\n");

    $dom = new DOMDocument();
    $html = file_get_contents('https://www.agentschapmdk.be/nl/veerdiensten/veerdienst-bazel-hemiksem');
    libxml_use_internal_errors(true);
    $dom->loadHTML($html);
    libxml_use_internal_errors(false);            $xpath = new DOMXPath($dom);
    $divBazHem = $xpath->query('//div[contains(@class, "text-primary status__text status__text--italic")]')->item(0);
    fwrite($myfile, trim($divBazHem->textContent));
    fwrite($myfile, "\n");
    
    $dom = new DOMDocument();
    $html = file_get_contents('https://www.agentschapmdk.be/nl/veerdiensten/veerdienst-sint-anna');
    libxml_use_internal_errors(true);
    $dom->loadHTML($html);
    libxml_use_internal_errors(false);            $xpath = new DOMXPath($dom);
    $divBazHem = $xpath->query('//div[contains(@class, "text-primary status__text status__text--italic")]')->item(0);
    fwrite($myfile, trim($divBazHem->textContent));
    fwrite($myfile, "\n");

    fclose($myfile);


?>