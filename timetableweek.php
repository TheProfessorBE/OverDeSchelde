<!DOCTYPE html>
<html>
    <?php include 'head.php';?>
    <body class="bg-gray-100">
    <center>
    <div class=" py-2"></div>
        <div class="font-sans bg-white shadow-lg p-4 max-w-5xl px-5 py-5 rounded-md">
            <div class="justify-center 	text-white ">
            <?php include 'navbar.php';?>


                <h1 class="my-6 text-center text-4xl font-semibold text-ODS-800">Afvaarten Week:</h1>
                <div class="grid grid-cols-2 lg:grid-cols-6 gap-0.5">
                    <div class="flex flex-col text-center" id="next-departures-bazel"></div>
                    <div class="flex flex-col text-center" id="next-departures-hemiksem"></div>
                    <div class="flex flex-col text-center" id="next-departures-kruibeke"></div>
                    <div class="flex flex-col text-center" id="next-departures-hoboken"></div>
                    <div class="flex flex-col text-center" id="next-departures-lo"></div>
                    <div class="flex flex-col text-center" id="next-departures-antwerpen"></div>
                </div>

                <?php include 'ferrystatus.php';?> 

                <?php include 'footer.php';?> 
            </div>
        </div>
    </center>
  </body>

  <script>
    writeFerryTables(1);
  </script>
</html>
