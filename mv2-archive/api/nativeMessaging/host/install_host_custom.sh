#3
echo "Native messaging host install start."

DIR="$HOME/chrome-extensions-samples/mv2-archive/api/nativeMessaging/host"

chmod 777 ./native-messaging-example-host
cp -f ./native-messaging-example-host "$DIR/native-messaging-example-host"
open "$DIR"
sh "$DIR/install_host.sh"

echo "Native messaging host install end."
