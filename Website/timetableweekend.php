<!DOCTYPE html>
<html>
    <?php include 'head.php';?>
    <body class="bg-gray-100 overflow-scroll">
    <center>
    <div class=" py-2"></div>
        <div class="font-sans bg-white shadow-lg p-4 max-w-5xl px-5 py-5 rounded-md">
            <div class="justify-center 	text-white ">
                <?php include 'navbar.php';?>

                <h1 class="my-2 text-center text-4xl font-semibold text-ODS-800 bg-ODS-100 rounded-lg p-2">Afvaarten Weekend:</h1>
                <div class="grid grid-cols-2 lg:grid-cols-6 gap-1 bg-ODS-100 p-3 rounded-lg">
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
    <div class="py-4"></div>
  </body>

  <script>
    writeFerryTables(2);
  </script>
</html>
