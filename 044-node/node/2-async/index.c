// run in command line
// clang index.c && a.out

#include <stdio.h>
#include <time.h>
#include <unistd.h>

int main(void) {

  time_t rawtime;
  struct tm * timeinfo;

  time ( &rawtime );
  timeinfo = localtime ( &rawtime );
  printf("Before - %s\n", asctime (timeinfo) );

  usleep(2000000);

  time ( &rawtime );
  timeinfo = localtime ( &rawtime );
  printf("After - %s\n", asctime (timeinfo) );

}
